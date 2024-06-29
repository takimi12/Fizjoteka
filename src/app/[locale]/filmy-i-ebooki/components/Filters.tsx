'use client'
import { useState, useEffect } from 'react';
import styles from "./Filters.module.scss";

interface Category {
    _id: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    price: string;
    description: string;
    category: string;
    imageFileUrl: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface Topic {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    categories: string[];
    price: string;
    imageFileUrl: string;
    pdfFileUrl: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface FilterComponentProps {
    categories: Category[];
    topics: Topic[];
    setFilteredCategories: React.Dispatch<React.SetStateAction<Category[]>>;
    setFilteredTopics: React.Dispatch<React.SetStateAction<Topic[]>>;
}

export default function FilterComponent({ categories, topics, setFilteredCategories, setFilteredTopics }: FilterComponentProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategories([...selectedCategories, value]);
        } else {
            setSelectedCategories(selectedCategories.filter(cat => cat !== value));
        }
    };

    const applyFilters = () => {
        const newFilteredCategories = selectedCategories.length
            ? categories.filter(product => selectedCategories.includes(product.category))
            : categories;
        const newFilteredTopics = selectedCategories.length
            ? topics.filter(topic => topic.categories.some(cat => selectedCategories.includes(cat)))
            : topics;

        setFilteredCategories(newFilteredCategories);
        setFilteredTopics(newFilteredTopics);
        setIsPopupOpen(false); // Close popup after applying filters
    };

    const handleSearchClick = () => {
        applyFilters();
    };

    const handleClearFilters = () => {
        setSelectedCategories([]);
        setFilteredCategories(categories);
        setFilteredTopics(topics);
    };

    const handlePopupOpen = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const uniqueCategories = Array.from(new Set([...categories.map(product => product.category), ...topics.flatMap(topic => topic.categories)]));

    return (
        <div className={styles.filters}>
            {isMobile ? (
                <>
                    <button className={styles.button} onClick={handlePopupOpen}>
                        Sprecyzuj czego szukasz
                    </button>
                    {isPopupOpen && (
                        <div className={styles.overlay} onClick={handlePopupClose}>
                            <div className={styles.popup}>
                                <div className={styles.topText}>
                                    <h6>Sprecyzuj czego szukasz</h6>
                                    <button className={styles.closeButton} onClick={handlePopupClose}>x</button>
                                </div>
                                <div className={styles.category}>
                                    <h6 className={styles.title}>Kategoria</h6>
                                </div>
                                {uniqueCategories.map(category => (
                                    <div key={category} className={styles.category}>
                                        <fieldset>
                                            <label className="Input_checkbox__ZAWb5">
                                                <input
                                                    type="checkbox"
                                                    className={styles.input}
                                                    name={category}
                                                    id={category}
                                                    value={category}
                                                    checked={selectedCategories.includes(category)}
                                                    onChange={handleCategoryChange}
                                                />
                                                <span>{category}</span>
                                            </label>
                                        </fieldset>
                                    </div>
                                ))}
                                <div className="flex flex-col mt-10">
                                    <div className='flex'>
                                        <button className={styles.button} onClick={handleSearchClick}>
                                            Wyszukaj
                                        </button>
                                    </div>
                                    <div className='flex justify-center mt-5'>
                                        <button className={styles.noClass} onClick={handleClearFilters}>
                                            Wyczyść filtry
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className={styles.category}>
                        <h6 className={styles.title}>Kategoria</h6>
                    </div>
                    {uniqueCategories.map(category => (
                        <div key={category} className={styles.category}>
                            <fieldset>
                                <label className="Input_checkbox__ZAWb5">
                                    <input
                                        type="checkbox"
                                        className={styles.input}
                                        name={category}
                                        id={category}
                                        value={category}
                                        checked={selectedCategories.includes(category)}
                                        onChange={handleCategoryChange}
                                    />
                                    <span>{category}</span>
                                </label>
                            </fieldset>
                        </div>
                    ))}
                    <div className="flex flex-col mt-10">
                        <div className='flex'>
                            <button className={styles.button} onClick={handleSearchClick}>
                                Wyszukaj
                            </button>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button className={styles.noClass} onClick={handleClearFilters}>
                                Wyczyść filtry
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
