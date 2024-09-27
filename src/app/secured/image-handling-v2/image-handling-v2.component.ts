import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-handling-v2',
  templateUrl: './image-handling-v2.component.html',
  styleUrl: './image-handling-v2.component.scss'
})
export class ImageHandlingV2Component implements OnInit{

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
  public responsiveOptions: any[] | undefined;
  draggedItem: any;
  draggedId: number | null = null; // ID of the currently dragged item
  hoverId: number | null = null; // ID of the currently hovered item
  selectAll: boolean = false;
  draggedIndex: number | null = null; // Index of the currently dragged item
  hoverIndex: number | null = null; // Index of the currently hovered item

  // Get the index of the item by ID
  getIndexById(id: number): number {
    return this.imgList.findIndex((img: any) => img.id === id);
  }

  // Handle the start of dragging
  onDragStart(event: any, id: number) {
    this.draggedItem = this.imgList[this.getIndexById(id)];
    this.draggedId = id; // Set the dragged ID
    event.dataTransfer.effectAllowed = "move"; // Optional: show the move cursor
  }

  // Handle the dragging over an item
  onDragOver(event:any, id: number) {
    this.hoverId = id; // Set the hover ID
    event.preventDefault(); // Prevent default to allow dropping
  }

  // Handle the drop and update the order of items
  onDrop(event: any) {
    if (this.hoverId !== null && this.draggedId !== null) {
      // Move the dragged item to the new position
      const draggedIndex = this.getIndexById(this.draggedId);
      const hoverIndex = this.getIndexById(this.hoverId);
      const draggedItem = this.imgList[draggedIndex];

      // Remove the dragged item
      this.imgList.splice(draggedIndex, 1);
      // Insert it at the hover index
      this.imgList.splice(hoverIndex, 0, draggedItem);
    }
    // this.resetDragState(); // Reset states after drop
  }

  // Reset dragging states
  resetDragState() {
    this.draggedItem = null;
    this.draggedId = null;
    this.hoverId = null;
  }

  // Handle drag leave to reset hover state
  onDragLeave() {
    this.hoverId = null; // Clear the hovering ID
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
