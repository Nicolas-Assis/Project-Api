interface SearchBarProps {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (value: string) => void;
    onInStockChange: (checked: boolean) => void;
}

export default function SearchBar({ filterText, onFilterTextChange }: { filterText: string; onFilterTextChange: (text: string) => void }) {
    return (
        <form>
            <input
                type="text"
                placeholder="Buscar serviços..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
        </form>
    );
}