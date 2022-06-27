import Stack from "./Stack";

class Tower {
  constructor() {
    this.disks = new Stack();
    this.size = 0;
  }

  add(value) {
    this.disks.push(value);
    this.size++;
    return this;
  }

  moveTopTo(destination) {
    if (
      destination.disks.top === null ||
      this.disks.top.value < destination.disks.top.value
    ) {
      destination.disks.push(this.disks.top.value);
      destination.size++;
      this.size--;
      this.disks.pop();
      return true;
    }
  }

  moveDisks(disks, destinationTower, auxiliaryTower) {
    if (disks === 0) {
      return true;
    }
    if (disks === 1) {
      this.moveTopTo(destinationTower);
    }
    if (disks >= 2) {
      this.moveDisks(disks - 1, auxiliaryTower, destinationTower);
      this.moveTopTo(destinationTower);
      auxiliaryTower.moveDisks(disks - 1, destinationTower, this);
    }
    return true;
  }
}

export default Tower;
