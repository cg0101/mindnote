<template>
<div class="pape-mindnote">

    <div class="pape-mindnote__bd">
        <div class="pape-mindnote__bd__title">
            <input type="text" placeholder="无标题" v-model="title" @change="onTitleChange" ref="title" class="input-title">
        </div>
        <div class="pape-mindnote__bd__tree">
            <mindnote class="mindnote" ref="mindnote" :propsitem="listItemData" @press-input="pressInput"></mindnote>
        </div>

    </div>
</div>
</template>

<script>
import Mindnote from "./Mindnote.vue";
import util from "../utils/util.js";
import mindnoteVue from './mindnote.vue';
export default {
    name: "MindnotePage",
    components: {
        Mindnote
    },
    props: ["mindnoteId"],
    data() {
        return {
            title: this.getDefaultTitle(),
            listItemData: [],
            rootItem: {
                name: "Untitled"
            },
        };
    },
    created() {
        this.getData();
        this.$nextTick(() => this.$refs.title.focus())
    },
    methods: {
        getData() {
            const tmp = util.getLocalStorage(this.mindnoteId);
            this.listItemData = tmp;
        },
        pressInput() {
            util.setLocalStorage(this.mindnoteId, this.listItemData);
        },
        getMindnoteId() {
            return this.$route.params.mindnoteId || this.mindnoteId;
        },
        getDefaultTitle() {
            let mindnotePage = this.fetchMindnoteById(this.getMindnoteId());
            if (mindnotePage) {
                return mindnotePage.name;
            }
            return ''
        },
        fetchMindnoteById(mindnoteId) {
            return this.fetchLocalDb().find((item) => item.id == mindnoteId)
        },
        fetchLocalDb(){
            return util.getLocalStorage("z-mindnoteItems")
        },
        onTitleChange() {
            let localDB = this.fetchLocalDb();
            let mindnotePage = this.fetchMindnoteById(this.getMindnoteId());
            let index = localDB.findIndex((item)=> item.id == mindnotePage.id);

            if (mindnotePage) {
                mindnotePage.name = this.title;
                localDB[index] = mindnotePage;
                util.setLocalStorage('z-mindnoteItems', localDB);
            }
        }
    },
    mounted() {

    }
};
</script>

<style scoped>
.pape-mindnote {
    height: calc(100vh);
    box-shadow: var(--block-shadow);
    padding-top: 40px;
}

.pape-mindnote__bd {
    margin-bottom: 15px;
    margin: 0 auto;
    width: 796px;
    padding: 18px 36px 0 36px;
    height: 100%;
    box-shadow: 0 0 6px 0 hsl(0deg 0% 86% / 50%);
    background-color: #fff;
    border: 1px solid #efeff1;
}

.pape-mindnote__bd__title {
    padding: 10px 0;
    border-bottom: 1px #eee solid;
}

.pape-mindnote__bd__tree {
    padding-top: 20px;
}

.input-title {
    width: 100%;
    border: none;
    min-height: 42px;
    color: #16181a;
    font-size: 34px;
    font-weight: 600;
    line-height: 48px;
    outline: none;
}
</style>
