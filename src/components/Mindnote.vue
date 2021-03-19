<template>
<div class="mindnote">
    <div v-for="(item, index) in treeData" :key="index" ref="treeData">
        <mindnote-item :key="index" ref="mindnoteTree" :item="item" @hit-enter="enterItem" @hit-tab="tabItem" @hit-delete="deleteItem" @press-inputut="inputContent">
        </mindnote-item>
        <div class="mindnote-children" v-show="isOpen" v-if="item.children && item.children.length">
            <mindnote :propsitem="item.children" @press-inputut="inputContent"></mindnote>
        </div>
    </div>
</div>
</template>

<script>
import MindnoteItem from "./MindnoteItem.vue";

export default {
    props: ['propsitem'],
    components: {
        MindnoteItem
    },
    data() {
        return {
            isOpen: true,
            treeData: [{
                id: 1,
                name: "Untitled"
            }]
        }
    },

    beforeMount() {
        if (this.propsitem && this.propsitem.length) {
            this.treeData = this.propsitem;
        } else {
            this.treeData = [{
                id: 1,
                name: "Untitled"
            }];
        }
    },
    watch: {
        propsitem: function (newVal, oldVal) {
            console.log("Prop changed: ", newVal, " | was: ", oldVal);
            this.treeData = this.propsitem;
        }
    },

    methods: {
        toggle() {
            console.log("child > toggle");
            this.isOpen = !this.isOpen;
        },

        enterItem(item) {
            console.log("child > enterItem", this);
            const itemindex = item._.vnode.key
            const itemscount = item.$parent.treeData.length;
            const newitemindex = itemindex + 1;
            const newitem = {
                id: itemscount,
                name: "",
                remark: "",
                children: [],
            };
            //添加新节点
            this.treeData.splice(newitemindex, 0, newitem);
            this.$nextTick(() => this.$el.children[newitemindex].querySelector('input').focus())
        },

        addSubitem() {
            console.log("child > addSubitem", this.treeData);
            this.$emit("add-subitem", this.treeData);
            this.isOpen = true;
        },

        tabItem(item) {
            console.log("child > tabItem", item);
            const itemkey = item._.vnode.key
            if (itemkey) {
                const indexitem = item._.vnode.key - 1;
                const target = item.$parent.treeData[indexitem];
                if (!target.children) {
                    target.children = [];
                }
                target.children.push(item.value);
                item.$parent.treeData.splice(itemkey, 1);
                this.$emit("press-inputut");
                //下一个层级的input获取焦点
                setTimeout(() => {
                    this.$el.querySelector('.mindnote-children').querySelector('input').focus()
                }, 100)

            } else {
                // 保留数节点，位置不发生变化，焦点依然保留

                console.log('child > tabItem > input > focus')
            }
        },

        deleteItem(item) {
            console.log("child > deleteItem", this.treeData);
            const itemkey = item._.vnode.key
            item.$parent.treeData.splice(itemkey, 1);
        },

        inputContent() {
            console.log("child > inputContent", this);
            this.$emit("press-inputut");
        }
    }
}
</script>

<style>
.mindnote-children {
    position: relative;
    padding-left: 20px;
}
</style>
