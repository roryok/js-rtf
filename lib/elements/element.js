//inspired by bobnice: http://stackoverflow.com/questions/1595611/how-to-properly-create-a-custom-object-in-javascript

Function.prototype.subclass= function(base) {
    var c= Function.prototype.subclass.nonconstructor;
    c.prototype= base.prototype;
    this.prototype= new c();
};
Function.prototype.subclass.nonconstructor= function() {};

 Element = function(format){
    if(format === undefined) format = new Format();
    this.format = format;
};