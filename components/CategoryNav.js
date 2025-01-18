import { cn } from "@/lib/utils"

function CategoryItem({ name, node, selectedCategory, onSelectCategory, path = [], level = 0 }) {
  const currentPath = [...path, name];
  const isSelected = selectedCategory === currentPath.join('/');
  const hasArticles = node.articles.length > 0;

  return (
    <div className="flex flex-col">
      {name && (
        <button
          onClick={() => onSelectCategory(currentPath.join('/'))}
          className={cn(
            "text-left px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors",
            "flex items-center justify-between",
            isSelected && "bg-accent font-medium",
            `ml-${level * 3}`
          )}
        >
          <span>{name}</span>
          {hasArticles && (
            <span className="text-xs text-muted-foreground">
              ({node.articles.length})
            </span>
          )}
        </button>
      )}
      {Object.entries(node.categories).map(([categoryName, categoryNode]) => (
        <CategoryItem
          key={categoryName}
          name={categoryName}
          node={categoryNode}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
          path={currentPath}
          level={level + 1}
        />
      ))}
    </div>
  );
}

export default function CategoryNav({ categoryTree, selectedCategory, onSelectCategory }) {
  return (
    <div className="w-64 pr-6 border-r">
      <h3 className="font-semibold mb-4">Categories</h3>
      <div className="space-y-1">
        <CategoryItem
          name="All"
          node={categoryTree}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
          level={0}
        />
        {Object.entries(categoryTree.categories).map(([categoryName, categoryNode]) => (
          <CategoryItem
            key={categoryName}
            name={categoryName}
            node={categoryNode}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
            level={0}
          />
        ))}
      </div>
    </div>
  );
}
