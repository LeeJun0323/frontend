import { useEffect, useState } from "react";

export type BookCS = {
  id: number;
  title: string;
  author: string;
};

const BookJsonFetcher = () => {
  const [bookInfo, setBookInfo] = useState<BookCS[]>([]);
  const getData = async () => {
    const response = await fetch(`./data/books.json`);
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    const fetchData = async () => {
      const localData = await getData();
      setBookInfo(localData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl">책 정보</h2>
      <table className="border border-blue-500">
        <thead>
          <tr>
            <th className="border border-blue-500">도서번호</th>
            <th className="border border-blue-500">도서명</th>
            <th className="border border-blue-500">저자명</th>
          </tr>
        </thead>
        <tbody>
          {bookInfo.map((book) => (
            <tr key={book.id}>
              <td className="border border-blue-500">{book.id} </td>
              <td className="border border-blue-500">{book.title} </td>
              <td className="border border-blue-500">{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookJsonFetcher;
