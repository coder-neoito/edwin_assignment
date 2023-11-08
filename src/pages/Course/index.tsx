import CourseList from 'constants/Courselist';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(Object(null));

  useEffect(() => {
    if (id) {
      setCourse(CourseList[Number(id) -1]);
    }
  }, [id]);
  return (
    <div className="flex p-5 flex-col md:flex-row gap-3">
      <div className="flex-1">
        <div className="font-semibold text-xl capitalize">{course.name}</div>
        <div className="font-semibold text-lg capitalize">
          Instructor: {course.author}
        </div>
        <p className="p-4 font-medium">{course.desription}</p>
        <div className="font-medium text-lg mt-3">
          Estimated Completion Time: {course.hrs} hrs
        </div>
      </div>
      <img src={`https://picsum.photos/id/${id}/400`} alt="" />
    </div>
  );
};

export default Course;
