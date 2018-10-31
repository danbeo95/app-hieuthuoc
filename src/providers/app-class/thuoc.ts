export class THUOC {
    private id:number = -1;
    private name:string = '';
    private lotNumber:string = '';
    private registerNumber:string =  '';
    private dateOff:Date;
    private priceIn:number = 0;
    private priceOut:number = 0;
    private number:number = 0;
    private numberInStoke:number = 0;
    private unit:string = '';
    private manufacture:string='';
    constructor(data?:any){
        if(data){
            this.parse(data);
        }
    }
    parse(data){
        if(data.Stt) this.id = data.Stt;
        if(data.TenThuoc) this.name = data.TenThuoc;
        if(data.SoLo) this.lotNumber = data.SoLo;
        if(data.SoDk) this.registerNumber = data.SoDk;
        if(data.HanSd) this.dateOff  = data.HanSd;
        if(data.GiaNhap) this.priceIn = data.GiaNhap;
        if(data.GiaBan) this.priceOut = data.GiaBan;
        if(data.SoLuongTon) this.number = data.SoLuongTon;
        if(data.DonVi) this.unit = data.DonVi;
        if(data.HangSx) this.manufacture = data.HangSx;
    }
    setPriceIn(value:number){
        this.priceIn =value;
    }
    getManufacture(){
        return this.manufacture;
    }
    getId():number{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getLotNumber():string{
        return this.lotNumber;
    }
    getRegisterNumber():string{
        return this.registerNumber;
    }
    getDateOff(){
        return this.dateOff;
    }
    getPriceIn():number{
        return this.priceIn;
    }
    getPriceOut():number{
        return this.priceOut;
    }
    getNumber():number{
        return this.number;
    }
    getUnit():string{
        return this.unit;
    }
}