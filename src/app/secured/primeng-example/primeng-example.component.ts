import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng-example',
  templateUrl: './primeng-example.component.html',
  styleUrls: ['./primeng-example.component.scss'],
})
export class PrimengExampleComponent implements OnInit {
  public imgList: any = [
    {
      name: 'Image 1',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 2',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 3',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 4',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 5',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 6',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 7',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 8',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 9',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 10',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 11',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 12',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 13',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 14',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 15',
      image: 'image1.jpg',
      selected: false,
    },
    {
      name: 'Image 16',
      image: 'image1.jpg',
      selected: false,
    },
  ];
  public responsiveOptions: any[] | undefined;
  draggedItem: any;

  constructor() {}

  // Handle the start of dragging
  onDragStart(event: any, index: number) {
    console.log("onDragStart => ",index);
    this.draggedItem = this.imgList[index];
  }

  // Handle the drop and update the order of items
  onDrop(event: any, dropIndex: number) {
    console.log("onDrop => ",dropIndex);
    if (this.draggedItem) {
      const dragIndex = this.imgList.indexOf(this.draggedItem);

      // Avoid dropping the item at the same place
      if (dragIndex !== dropIndex) {
        // Remove the dragged item from the current position
        this.imgList.splice(dragIndex, 1);

        // Insert the dragged item at the drop position
        this.imgList.splice(dropIndex, 0, this.draggedItem);
      }

      // Reset the dragged item
      this.draggedItem = null;
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
  }
}
