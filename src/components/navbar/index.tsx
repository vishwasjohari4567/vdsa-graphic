import { NavbarWrapper, CategoryButton } from './styles';

type NavbarProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
};

export default function Navbar({ categories, selectedCategory, onSelectCategory }: NavbarProps) {
  return (
    <NavbarWrapper>
      {categories.map(cat => (
        <CategoryButton
          key={cat}
          active={selectedCategory === cat}
          onClick={() => onSelectCategory(cat)}
          aria-pressed={selectedCategory === cat}
        >
          {cat}
        </CategoryButton>
      ))}
    </NavbarWrapper>
  );
}
