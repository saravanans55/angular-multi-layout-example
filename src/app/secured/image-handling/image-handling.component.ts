import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-handling',
  templateUrl: './image-handling.component.html',
  styleUrl: './image-handling.component.scss'
})
export class ImageHandlingComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {

  }

  public imgList: any = [
    {
      id : 1,
      name: 'Image 1',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 2,
      name: 'Image 2',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 3,
      name: 'Image 3',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 4,
      name: 'Image 4',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 5,
      name: 'Image 5',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 6,
      name: 'Image 6',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 7,
      name: 'Image 7',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 8,
      name: 'Image 8',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 9,
      name: 'Image 9',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 10,
      name: 'Image 10',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 11,
      name: 'Image 11',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 12,
      name: 'Image 12',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 13,
      name: 'Image 13',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 14,
      name: 'Image 14',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 15,
      name: 'Image 15',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
    {
      id : 16,
      name: 'Image 16',
      image: '/images/sample-image.jpg',
      selected: false,
      editing: false,
    },
  ];
  itemsPerPage = 10;
  currentPage = 0;
  currentItems = this.imgList.slice(0, this.itemsPerPage); // Paginate to show only the first set of images
  allSelected = false;

  // Correctly handles drag and drop between the imgList
  drop(event: CdkDragDrop<any[]>) {
    const previousIndex = event.previousIndex + (this.currentPage * this.itemsPerPage);
    const currentIndex = event.currentIndex + (this.currentPage * this.itemsPerPage);

    // Move item inside the full imgList using calculated global indices
    moveItemInArray(this.imgList, previousIndex, currentIndex);

    // Refresh current items based on updated imgList
    this.updateCurrentItems();
  }

  // Method to update the currentItems based on the current page
  updateCurrentItems() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.currentItems = this.imgList.slice(start, end);
  }

  // Navigate to the next set of images
  nextPage() {
    const start = (this.currentPage + 1) * this.itemsPerPage;
    if (start < this.imgList.length) {
      this.currentPage++;
      this.updateCurrentItems();
    }
  }

  // Navigate to the previous set of images
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateCurrentItems();
    }
  }

  // Select/Deselect all images
  toggleSelectAll() {
    this.allSelected = !this.allSelected;
    this.imgList.forEach((img:any) => img.selected = this.allSelected);
  }

}
