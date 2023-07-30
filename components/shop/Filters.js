import { useState } from "react";

export default function Filters({categories, onSortChange}) {
    const [selectedCategoryOption, setSelectedCategoryOption] = useState('');
    const [selectedSortOption, setSelectedSortOption] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategoryOption(event.target.value);
        onSortChange(selectedSortOption, event.target.value);
    };
    const handleSortChange = (event) => {
        setSelectedSortOption(event.target.value);
        onSortChange(event.target.value, selectedCategoryOption);
    };

    return (
        <div className="relative container mx-auto my-5 px-5">
            <div className="flex flex-wrap gap-5 w-full justify-between">
                <select id="categories" 
                    className="bg-gray-50 text-sm rounded-lg block p-2.5"
                    value={selectedCategoryOption}
                    onChange={handleCategoryChange}
                    >
                    <option>Choose a category</option>
                    {
                        categories.map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))
                    }
                </select>

                <select id="categories" 
                    className="bg-gray-50 text-sm rounded-lg block p-2.5"
                    value={selectedSortOption}
                    onChange={handleSortChange}
                    >
                    <option>Default sort</option>
                    <option value="price_asc">Sort by price (asc)</option>
                    <option value="price_desc">Sort by price (desc)</option>
                    <option value="title_asc">Sort by title (asc)</option>
                    <option value="title_desc">Sort by title (desc)</option>
                </select>
            </div>
        </div>
    )
}