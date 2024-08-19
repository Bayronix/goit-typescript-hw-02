import { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import { Api } from "../Api/Api";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import ImageModal from "./ImageModal/ImageModal";

type ApiArticle = {
  id: string;
  title: string;
  description: string;
  urls: {
    small: string;
  };
  alt_description?: string;
};

function App() {
  const [articles, setArticles] = useState<ApiArticle[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ApiArticle | null>(null);

  useEffect(() => {
    if (query) {
      const getArticles = async () => {
        setLoading(true);
        setError(null);
        try {
          const data = await Api(query, page);
          if (data.length === 0 && page === 1) {
            setError("No results found for your query. Please try again.");
            setArticles([]);
            toast.error("No results found for your query. Please try again.");
          } else {
            setArticles((prevArticles) =>
              page === 1 ? data : [...prevArticles, ...data]
            );
          }
        } catch (err) {
          setError("Failed to fetch images. Please try again.");
          toast.error("Failed to fetch images. Please try again.");
        } finally {
          setLoading(false);
        }
      };

      getArticles();
    }
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery.trim() === "") {
      toast.error("Field is empty");
    } else {
      setQuery(newQuery);
      setArticles([]);
      setPage(1);
      setError(null);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: ApiArticle) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster position="top-right" />
      {loading && articles.length === 0 ? (
        <Loader />
      ) : (
        <>
          <ImageGallery articles={articles} openModal={openModal} />
          {error && <p>{error}</p>}
          {articles.length > 0 && !loading && !error && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
