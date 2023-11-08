import CourseList from 'constants/Courselist';
import { useNavigate } from 'react-router-dom';

const ListAll = () => {
  const navigate = useNavigate();
  const onCourseClick = (id: number) => navigate(`/courses/${id}`);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-5">
      {CourseList.map((course, index) => (
        <div
          className="flex-col bg-slate-100 shadow-sm hover:shadow-md p-4 cursor-pointer"
          key={course.id}
          onClick={() => onCourseClick(course.id)}
        >
          <div className="flex-1 flex items-center justify-center">
            <img
              src={`https://picsum.photos/id/${index + 1}/400`}
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="flex w-full justify-between items-center">
            <div>
              <div>{course.name}</div>
              <div>bt {course.author}</div>
            </div>
            <div>{course.hrs} hrs</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListAll;
