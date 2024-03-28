
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import UseReadStorage from "../../Hooks/UseReadStorage";



const PagesToRead = () => {
    const { localReadBooks } = UseReadStorage();

    const data = localReadBooks.map(book => ({
        name: book.bookName,
        uv: book.totalPages,
        color : book.color
    }));




    const TriangleBar = ({ fill, x, y, width, height }) => {
        const getPath = (x, y, width, height) => (
            `M${x},${y + height}
             C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
             C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
             Z`
        );

       return  <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    const renderBarChart = (
        <BarChart cl width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey={"name"} />
            <Tooltip></Tooltip>
            <YAxis />
            <Bar dataKey="uv" fill="#0085F6"
                shape={<TriangleBar />} />
        </BarChart>
    );



    return (
        <div className='mt-40 w-full flex justify-center'>
            {renderBarChart}

        </div>
    );
};

export default PagesToRead;