class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null)
    this.count = 0
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let keyPair = new KeyValuePair(key, value);
    let Index = this.hashMod(key);
    if(this.data[Index] !== null){
      let current = this.data[Index];
      while(current){
        if(current.key == key){
          current.value = value;
          return;
        }
        else{
          current = current.next
        }
      }
      keyPair.next = this.data[Index];
      this.data[Index] = keyPair;
      this.count++;
    }
    else{
      this.data[Index] = keyPair;
      this.count++;
    }
  }


  read(key) {
    let Index = this.hashMod(key);
    let current = this.data[Index];
    while (current) {
      if (current.key == key){
        return current.value;
      }
      current = current.next
    }
    return undefined
  }


  resize() {
    const oldData = this.data;
    this.capacity = this.capacity * 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
    for (let ele of oldData) {
      while(ele) {
        this.insert(ele.key, ele.value);
        ele = ele.next;
      }
    }

  }


  delete(key) {
    let Index = this.hashMod(key);
    let current = this.data[Index];
    while (current){
      if(current.key == key){
        current.key = undefined;
        current.value = undefined;
        this.count--;
        if (!current){
          return;
        }
      }
      current = current.next;
    }
    return "Key not found";
  }
}


module.exports = HashTable;
