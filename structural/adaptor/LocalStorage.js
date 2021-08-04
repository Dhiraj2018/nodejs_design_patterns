var {unlink, readFileSync, writeFile, existsSync} = require( 'fs' ); 
class LocalStorage{

    constructor(){
        if(existsSync('localstorage.json')){
            console.log('Loading items from the local storage.json')
            let txt= readFileSync('localstorage.json');
            this.items = JSON.parse(txt);
        }else{
            this.items={};
        }
    }

    get length(){
        return Object.keys(this.items).length;
    }

    getItem(key){
        return this.items[key]
    }

    setItem(key, val){
        this.items[key]= val;
        writeFile('localstorage.json', JSON.stringify(this.items),err=>{
            if(err){
                console.log(err)
            }
        })

    }
    clear(){
        this.items={};
        unlink('localstorage.json',()=>{
            console.log('local storage file removed')
        })
    }
}

module.exports = new LocalStorage();