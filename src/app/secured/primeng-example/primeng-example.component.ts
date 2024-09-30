import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
  selector: 'app-primeng-example',
  templateUrl: './primeng-example.component.html',
  styleUrls: ['./primeng-example.component.scss'],
})
export class PrimengExampleComponent implements OnInit {
  public imgList: any = [
    {
      id: 1,
      name: 'Image 1',
      image: '/images/factory1.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 2,
      name: 'Image 2',
      image: '/images/factory2.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 3,
      name: 'Image 3',
      image: '/images/factory3.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 4,
      name: 'Image 4',
      image: '/images/carfactory2.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 5,
      name: 'Image 5',
      image: '/images/foodproductfactory.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 6,
      name: 'Image 6',
      image: '/images/carfactory3.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 7,
      name: 'Image 7',
      image: '/images/solarplant1.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 8,
      name: 'Image 8',
      image: '/images/solarplant2.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 9,
      name: 'Image 9',
      image: '/images/factory1.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 10,
      name: 'Image 10',
      image: '/images/factory2.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 11,
      name: 'Image 11',
      image: '/images/factory3.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 12,
      name: 'Image 12',
      image: '/images/carfactory2.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 13,
      name: 'Image 13',
      image: '/images/carfactory3.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 14,
      name: 'Image 14',
      image: '/images/foodproductfactory.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 15,
      name: 'Image 15',
      image: '/images/factory1.jpg',
      selected: false,
      editing: false,
    },
    {
      id: 16,
      name: 'Image 16',
      image: '/images/factory2.jpg',
      selected: false,
      editing: false,
    },
  ];
  public viewImageDialog: boolean = false;
  public imageEditorDialogDialog: boolean = false;
  public imageEditorVisible: boolean = false;
  public responsiveOptions: any[] | undefined;
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  public draggedItem: any;
  public selectAll: boolean = false; // Track the state of "Select All"
  public singleSelectedImgObj: any = null;

  // Function to find index by ID
  public getIndexById(id: number): number {
    return this.imgList.findIndex((img: any) => img.id === id);
  }

  // Handle the start of dragging
  public onDragStart(event: any, id: number) {
    this.draggedItem = this.imgList[this.getIndexById(id)];
  }

  // Handle the drop and update the order of items
  public onDrop(event: any, dropId: number) {
    const dropIndex = this.getIndexById(dropId);
    if (this.draggedItem) {
      const dragIndex = this.getIndexById(this.draggedItem.id);
      if (dragIndex !== dropIndex) {
        // Remove the dragged item from its original position
        this.imgList.splice(dragIndex, 1);
        // Insert the dragged item at the drop position
        this.imgList.splice(dropIndex, 0, this.draggedItem);
      }
      this.draggedItem = null;
    }
  }

  // Get the 1-based index to display
  public getImageIndex(currentId: number): number {
    return this.getIndexById(currentId) + 1; // Returning 1-based index
  }

  // Toggle select all
  public toggleSelectAll() {
    this.imgList.forEach((img: any) => (img.selected = this.selectAll));
  }

  // Update selectAll based on individual selections
  public updateSelectAll() {
    this.selectAll = this.imgList.every((img: any) => img.selected);
  }

  public saveImageDetails(item: any) {}

  public created() {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const imageEditor: any = getComponent(
      document.getElementById('image-editor') as HTMLElement,
      'image-editor'
    );
    if (Browser.isDevice) {
      imageEditor.open(this.singleSelectedImgObj?.image);
    } else {
      imageEditor.open(this.singleSelectedImgObj?.image);
    }
    if (imageEditor.theme && window.location.href.split('#')[1]) {
      imageEditor.theme = window.location.href.split('#')[1].split('/')[1];
    }
  }

  // Handler used to reposition the tooltip on page scroll
  public onScroll(): void {
    if (document.getElementById('image-editor_sliderWrapper')) {
      let slider: any = getComponent(
        document.getElementById('image-editor_sliderWrapper') as HTMLElement,
        'slider'
      );
      slider.refreshTooltip(slider.tooltipTarget);
    }
  }

  public openImageEditor(img: any) {
    console.log('img => ', img);
    this.viewImageDialog = true;
    this.singleSelectedImgObj = img;
  }

  public showImageView(img: any) {
    console.log('img => ', img);
    this.imageEditorDialogDialog = true;
    this.singleSelectedImgObj = img;
  }

  // Called when the dialog is fully opened
  public initializeImageEditor() {
    this.imageEditorVisible = true; // Show the ImageEditor after the dialog is fully rendered
    if (this.singleSelectedImgObj?.image) {
      setTimeout(() => {
        const imageEditor: any = getComponent(
          document.getElementById('image-editor') as HTMLElement,
          'image-editor'
        );
        if (imageEditor) {
          imageEditor.open(this.singleSelectedImgObj.image); // Load the selected image
        }
      });
    }
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    let rpHtml: any = document.getElementById('right-pane') as HTMLElement;
    if (rpHtml) {
      rpHtml.addEventListener('scroll', this.onScroll.bind(this));
    }
  }
}
