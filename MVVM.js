class MVVM{
    constructor(options) {
        this.$el=options.el;
        this.$data=options.data;
        //编译
        if(this.$el){
            //数据劫持
            let observer=new Observer(this.$data);
            this.proxyData(this.$data);
            //用数据和元素进行编译
            let compile=new Compile(this.$el,this);
        }
    }
    //数据代理
    proxyData(data){
        Object.keys(data).forEach(key=>{
            Object.defineProperty(this,key,{
                get(){
                    return data[key]
                },
                set(v) {
                    data[key]=v
                }
            })
        })
    }

}

