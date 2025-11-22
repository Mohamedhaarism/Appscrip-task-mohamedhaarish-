'use client';

import { useState } from 'react';
import { FilterState } from '@/types/product';
import { AGE_RANGES, SUITABLE_FOR, MATERIALS } from '@/lib/api';
import styles from './FilterSidebar.module.css';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState({
    ageRanges: false,
    suitableFor: false,
    material: false,
  });

  const toggleSection = (section: keyof typeof isOpen) => {
    setIsOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckboxChange = (
    category: keyof FilterState,
    value: string
  ) => {
    const newFilters = { ...filters };
    const index = newFilters[category].indexOf(value);
    
    if (index > -1) {
      newFilters[category] = newFilters[category].filter(item => item !== value);
    } else {
      newFilters[category] = [...newFilters[category], value];
    }
    
    onFilterChange(newFilters);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.filterSection}>
          <button
            className={styles.filterHeader}
            onClick={() => toggleSection('ageRanges')}
            aria-expanded={isOpen.ageRanges}
          >
            <span>AGE RANGES</span>
            <span className={styles.arrow}>{isOpen.ageRanges ? '▼' : '▶'}</span>
          </button>
          {isOpen.ageRanges && (
            <div className={styles.filterOptions}>
              {AGE_RANGES.map(range => (
                <label key={range} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={filters.ageRanges.includes(range)}
                    onChange={() => handleCheckboxChange('ageRanges', range)}
                  />
                  <span>{range}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className={styles.filterSection}>
          <button
            className={styles.filterHeader}
            onClick={() => toggleSection('suitableFor')}
            aria-expanded={isOpen.suitableFor}
          >
            <span>SUITABLE FOR</span>
            <span className={styles.arrow}>{isOpen.suitableFor ? '▼' : '▶'}</span>
          </button>
          {isOpen.suitableFor && (
            <div className={styles.filterOptions}>
              {SUITABLE_FOR.map(item => (
                <label key={item} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={filters.suitableFor.includes(item)}
                    onChange={() => handleCheckboxChange('suitableFor', item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className={styles.filterSection}>
          <button
            className={styles.filterHeader}
            onClick={() => toggleSection('material')}
            aria-expanded={isOpen.material}
          >
            <span>MATERIAL</span>
            <span className={styles.arrow}>{isOpen.material ? '▼' : '▶'}</span>
          </button>
          {isOpen.material && (
            <div className={styles.filterOptions}>
              {MATERIALS.map(mat => (
                <label key={mat} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={filters.material.includes(mat)}
                    onChange={() => handleCheckboxChange('material', mat)}
                  />
                  <span>{mat}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

