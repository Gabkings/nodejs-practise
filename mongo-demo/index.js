const mongoose =  require('mongoose')

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true})
    .then(() => console.log("Connected successfully ..."))
    .catch(err => console.error("Could not get connected", err ))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    type:[String],
    date: {type:Date, default:Date.now()},
    isPublished: Boolean
});

const Course = mongoose.model("Course",courseSchema)



async function createCourse(){
    const course = new Course({
        name:"Angular course",
        author:"Mosh",
        type:['Angular','frontend'],
        isPublished: true

    })
    const result = await course.save()
    console.log(result)
}

async function getCourses(){
    //eq = equal
    //ne = not equal
    //gt = greater than
    //gte = greater than or equal to
    //lt = lessthan
    //in = in
    //nin = not in


    const courses = await Course
        .find()
        .limit(10)
        .sort({name:1})
        .select({name:1,type:1})
    console.log(courses)
}


getCourses()
createCourse()