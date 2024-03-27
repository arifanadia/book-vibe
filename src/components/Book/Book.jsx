import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,

} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const {bookId, tags, bookName, author, category, ratings, image } = book || {};
    return (
        <Link to={`/books-details/${bookId}`}>
            <Card className="">
                <CardHeader floated={false} className="bg-[#F3F3F3] py-8 h-[230px]"  >
                    <figure className="w-1/3 mx-auto">
                        <img src={image} alt="" />
                    </figure>


                </CardHeader>
                <CardBody>
                    <p>
                        {
                            tags.map((tag, idx) => <span className="mr-4 bg-[#F3F3F3] px-6 py-2 rounded-3xl text-primary" key={idx}><a href="">{tag}</a></span>)
                        }
                    </p>
                    <h3 className="text-2xl font-bold text-[#131313] font-serif my-4">{bookName}</h3>
                    <h5 className="text-[#131313CC] font-medium">By : {author}</h5>
                    <div className="mb-3 flex items-center justify-between mt-16">
                        <Typography color="blue-gray" className="font-medium ">
                            {category}
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="flex items-center gap-1.5 font-normal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {ratings}
                        </Typography>
                    </div>
                </CardBody>

            </Card>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired

};

export default Book;