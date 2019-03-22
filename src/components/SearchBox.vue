<template>
     <div class="search-box xn-box ac jsb" :style="_style">
        <div class="classify xn-box center" v-if="_isClassifyShow"><i></i></div>
        <input class="search" :readOnly="_isReadOnly" :style="_searchStyle" placeholder="按关键字搜索商品" />
        <div class="user" v-if="_isLoginShow">
            <div class="login">登陆</div>
        </div>
        <div class="display-type" v-if="_isDisplayTypeShow" :style="displayType" @click="changeDisplayType()">
        </div>
    </div>
</template>

<script>
export default {
    name:'SearchBox',
    props:['_isClassifyShow', '_isLoginShow', '_isDisplayTypeShow', '_isReadOnly', '_style', '_searchStyle'],
    data(){
        return{
            displayType: "",
            displayTypeRow: "background-image:url('data:image/png; base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NTIxZTNmNS02YjdiLWRlNDEtYjVkZi1kMGIwMmM0MDE1YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDdDMUQzRTVGMDU1MTFFN0IwNUZEQUZCNDYxNEE0NEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDdDMUQzRTRGMDU1MTFFN0IwNUZEQUZCNDYxNEE0NEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTUyMWUzZjUtNmI3Yi1kZTQxLWI1ZGYtZDBiMDJjNDAxNWJiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1MjFlM2Y1LTZiN2ItZGU0MS1iNWRmLWQwYjAyYzQwMTViYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiajlfsAAAEmSURBVHjaYkxLS/NkYGCYC8SSDNjBcyBOBuLtaOK+QFwIxKZQ/mkg7gPiLSAOE9TQMCBmxIHDoGqQQQsQ9wLxFCCWhuIpUINBcgwsUJceYcANjqD5xgeIQ4HYDIg/IImvA+J9QHwCiE8yMZAOioC4Es1QGACJVYGCiByDTYB4Dx753SA15BhMCPwHxQ05Bp8BYhc88m6gFEKOwf1A3AbEAljkBKBy/UzQdGqDxyBrIH6BxN8MxGuA+BQQBwExLxSD2CehcptByS0FiFcDsQQOg59CMwgyqIEaXADEi6BiIH4J1GJwOt6GJ9fhA5ugGCugRaqAGwwqK55Bkwk2/AyqBgaIUk9OWUGUeiYyygqi1NM0jEcNpr3BpJYVRKknp6wgSj1AgAEACutP9xLvo6sAAAAASUVORK5CYII=');",
            displayTypeColumn: "background-image:url('data:image/png; base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NTIxZTNmNS02YjdiLWRlNDEtYjVkZi1kMGIwMmM0MDE1YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDdDMUQzRTlGMDU1MTFFN0IwNUZEQUZCNDYxNEE0NEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDdDMUQzRThGMDU1MTFFN0IwNUZEQUZCNDYxNEE0NEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTUyMWUzZjUtNmI3Yi1kZTQxLWI1ZGYtZDBiMDJjNDAxNWJiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1MjFlM2Y1LTZiN2ItZGU0MS1iNWRmLWQwYjAyYzQwMTViYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt1IhZsAAACgSURBVHjaYkxLS/NkYGCYC8SSDNjBcyBOnjlz5nYQJz09nYEYwAI1NAyo8Qg2BUCDbIDUKiCWYiABMIFcistQEIDKSTKQCJgYaARYyNDzn1YGMw7PoAC5+Dk0STHgSG7WQOoFWlAQxCAXpwDxaqABEjjMfgrKICQHBTCdbiMnnQ5c5AGDgKSygpRUMbTKitEsPcSDgtSyguigoElZARBgAAdXOtEUSZH4AAAAAElFTkSuQmCC');"
        }
    },
    mounted:function(){
        this.displayType = this.displayTypeRow
    },
    methods:{
        changeDisplayType(){
            if(this.displayType == this.displayTypeRow){
                this.displayType = this.displayTypeColumn
            }else{
                this.displayType = this.displayTypeRow
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .search-box{
        width: 100%;
        height: getAdaptSize(4rem);
        background-color: #e50e0f;
        .classify{
            width: getAdaptSize(5rem);
            height: getAdaptSize(3.3rem);
            i{
                display: block;
                width: getAdaptSize(2rem);
                height: getAdaptSize(2rem);
                background: url(../assets/img/classify.png);
                background-size: 100%;
            }
        }
        .search{
            box-sizing: border-box;
            padding-left: getAdaptSize(2.5rem);
            width: 75%;
            height: getAdaptSize(2.8rem);
            line-height: getAdaptSize(2.9rem);
            color: #666;
            font-size: getAdaptSize(1.6rem);
            background-color: #fff;
            border-radius: 15px;
            background-repeat: no-repeat; 
            background-image: url(../assets/img/search.png);
            background-size: getAdaptSize(1.3rem) getAdaptSize(1.3rem);
            background-position: 3% center;
            border: none;
            outline:medium;
        }
        .user{
            .login{
                width: getAdaptSize(5rem);
                height: getAdaptSize(4rem);
                line-height: getAdaptSize(4rem);
                text-align: center;
                font-weight: bold;
                font-size: getAdaptSize(1.6rem);
                color: #fff;
            }
        }
        .display-type{
            width: getAdaptSize(2.1rem);
            height: getAdaptSize(2.1rem);
            background-size: 100%;
        }
    }
</style>


