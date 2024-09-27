import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng-example',
  templateUrl: './primeng-example.component.html',
  styleUrls: ['./primeng-example.component.scss'],
})
export class PrimengExampleComponent implements OnInit {
  public imgList: any = [
    {
      id : 1,
      name: 'Image 1',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 2,
      name: 'Image 2',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 3,
      name: 'Image 3',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 4,
      name: 'Image 4',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 5,
      name: 'Image 5',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 6,
      name: 'Image 6',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 7,
      name: 'Image 7',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 8,
      name: 'Image 8',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 9,
      name: 'Image 9',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 10,
      name: 'Image 10',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 11,
      name: 'Image 11',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 12,
      name: 'Image 12',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 13,
      name: 'Image 13',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 14,
      name: 'Image 14',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 15,
      name: 'Image 15',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 16,
      name: 'Image 16',
      image: 'image1.jpg',
      selected: false,
      editing: false,
    },
  ];
  public responsiveOptions: any[] | undefined;
  draggedItem: any;
  selectAll: boolean = false; // Track the state of "Select All"

  // Function to find index by ID
  getIndexById(id: number): number {
    return this.imgList.findIndex((img:any) => img.id === id);
  }

  // Handle the start of dragging
  onDragStart(event: any, id: number) {
    console.log("onDragStart => ", id);
    this.draggedItem = this.imgList[this.getIndexById(id)];
  }

   // Handle the drop and update the order of items
   onDrop(event: any, dropId: number) {
    const dropIndex = this.getIndexById(dropId);
    if (this.draggedItem) {
      const dragIndex = this.getIndexById(this.draggedItem.id);
      if (dragIndex !== dropIndex) {
        // Remove the dragged item from its original position
        this.imgList.splice(dragIndex, 1);
        // Insert the dragged item at the drop position
        this.imgList.splice(dropIndex, 0, this.draggedItem);
      }
      this.draggedItem = null; // Clear the dragged item after the drop
    }
  }

  // Get the 1-based index to display
  getImageIndex(currentId: number): number {
    return this.getIndexById(currentId) + 1; // Returning 1-based index
  }

  // Toggle select all
  toggleSelectAll() {
    this.imgList.forEach((img:any) => img.selected = this.selectAll);
  }

  // Update selectAll based on individual selections
  updateSelectAll() {
    this.selectAll = this.imgList.every((img:any) => img.selected);
  }

  saveImageDetails(item:any) {

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
  }
}
