const course={
    cname:"js",
    price:"999",
    cInstructor:"Hitesh"
};

//course.cInstructor don't write everytime
const {cInstructor}=course;
console.log(cInstructor);


const {cInstructor:inst}=course;
console.log(inst);