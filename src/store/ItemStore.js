import { observable, computed, action } from 'mobx';
import Item from './ItemModel';

export default class ItemStore {
    @observable items = [];
    @observable packedItemsFilter = '';
    @observable unpackedItemsFilter = '';

    // computed properties
    @computed get packedItems() {
        return this.items.filter(item => item.packed);
    }
    @computed get unpackedItems() {
        return this.items.filter(item => item.unpacked);
    }
    @computed get filteredPackedItems() {
        return this.packedItems.filter(item =>
            item.value.includes(this.packedItemsFilter)
        );
    }
    @computed get filteredUnpackedItems() {
        return this.unpackedItems.filter(item =>
            item.value.includes(this.unpackedItemsFilter)
        );
    }

    // actions
    @action.bound updatePackedItemsFilter(value) {
        this.packedItemsFilter = value;
    }
    @action.bound updateUnpackedItemsFilter(value) {
        this.unpackedItemsFilter = value;
    }
    @action.bound addItem = (value) => {
        console.log("recieved value is: " + value);
        this.items.push(new Item(value, this));
    }
    @action.bound remove = (itemToRemove) => {
        this.items.filter(item => item === itemToRemove);
    }




}
