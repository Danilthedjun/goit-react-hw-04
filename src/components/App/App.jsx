import { fetchImages } from "../../articles-api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

export default function App() {
  const [images, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showNoImagesToast, setShowNoImagesToast] = useState(false);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
    setShowNoImagesToast(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getPhotos() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
        if (data.length === 0 && !showNoImagesToast) {
          toast.error("No images found, try changing your request!");
          setShowNoImagesToast(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotos();
  }, [page, query, showNoImagesToast]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
      <ImageModal
        imageUrl={selectedImageUrl}
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
