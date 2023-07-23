import { useState } from "react";


export default function Filters() {
    const [selectedCategoryOption, setSelectedCategoryOption] = useState('');
    const [selectedSortOption, setSelectedSortOption] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategoryOption(event.target.value);
    };
    const handleSortChange = (event) => {
        setSelectedSortOption(event.target.value);
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
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>

                <select id="categories" 
                    className="bg-gray-50 text-sm rounded-lg block p-2.5"
                    value={selectedSortOption}
                    onChange={handleSortChange}
                    >
                    <option>Default sort</option>
                    <option value="US">Sort by price (asc)</option>
                    <option value="CA">Sort by price (desc)</option>
                    <option value="FR">Sort by name (asc)</option>
                    <option value="DE">Sort by name (desc)</option>
                </select>
            </div>
        </div>
    )
}