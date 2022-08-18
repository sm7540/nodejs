const {PI}=Math;

module.exports = function (r){
    return{
        area(){return PI * r * r;},
        circumference(){return  2 * PI * r;}
    }
};



// exports.area = (r) => PI * r * r;

// exports.circumference = (r) => 2 * PI * r;