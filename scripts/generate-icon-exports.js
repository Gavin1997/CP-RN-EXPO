#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-undef
const ICONS_DIR = path.join(__dirname, '../src/components/ui/icons');
const INDEX_FILE = path.join(ICONS_DIR, 'index.tsx');

function generateIconExports() {
  try {
    // Read all files in the icons directory
    const files = fs.readdirSync(ICONS_DIR);

    // Filter for .tsx files (excluding index.tsx)
    const iconFiles = files
      .filter((file) => file.endsWith('.tsx') && file !== 'index.tsx')
      .sort(); // Sort alphabetically for consistent output

    // Generate export statements
    const exports = iconFiles
      .map((file) => {
        const fileName = path.basename(file, '.tsx');
        return `export * from './${fileName}';`;
      })
      .join('\n');

    // Add a final newline
    const content = exports + '\n';

    // Write to index.tsx
    fs.writeFileSync(INDEX_FILE, content, 'utf8');

    console.log(`✅ Generated ${iconFiles.length} icon exports in index.tsx`);
    console.log(
      'Generated exports for:',
      iconFiles.map((f) => path.basename(f, '.tsx')).join(', ')
    );
  } catch (error) {
    console.error('❌ Error generating icon exports:', error.message);
    process.exit(1);
  }
}

// Run the script
generateIconExports();
