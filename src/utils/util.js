let keyVersion = '1.0.0';
let buildTrueKey = (key)=> {
    return key+ keyVersion;
};
export default{
  
    setLocalStorage: (key, value) => {
        return localStorage.setItem(buildTrueKey(key), JSON.stringify(value));
    },
    getLocalStorage: (key) => {
        return JSON.parse(localStorage.getItem(buildTrueKey(key)));
    },
    uniqueid: () => {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
            c
        ) {
            const r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
};
