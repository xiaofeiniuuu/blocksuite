# @blocksuite/affine-widget-scroll-anchoring

## 0.17.14

### Patch Changes

- 163cb11: - Provide an all-in-one package for Affine.
  - Fix duplication occurs when card view is switched to embed view.
  - Improve linked block status detection.
  - Separate user extensions and internal extensions in std.
  - Fix add note feature in database.
  - Fix pasting multiple times when span nested in p.
  - Refactor range sync.
- Updated dependencies [163cb11]
  - @blocksuite/affine-model@0.17.14
  - @blocksuite/affine-shared@0.17.14
  - @blocksuite/block-std@0.17.14
  - @blocksuite/global@0.17.14

## 0.17.13

### Patch Changes

- 9de68e3: Update mindmap uitls export
- Updated dependencies [9de68e3]
  - @blocksuite/affine-model@0.17.13
  - @blocksuite/affine-shared@0.17.13
  - @blocksuite/block-std@0.17.13
  - @blocksuite/global@0.17.13

## 0.17.12

### Patch Changes

- c334c91: - fix(database): remove image column
  - fix: frame preview should update correctly after mode switched
  - refactor: move with-disposable and signal-watcher to global package
  - fix(edgeless): failed to alt clone move frame when it contains container element
  - fix: wrong size limit config
- Updated dependencies [c334c91]
  - @blocksuite/affine-model@0.17.12
  - @blocksuite/affine-shared@0.17.12
  - @blocksuite/block-std@0.17.12
  - @blocksuite/global@0.17.12

## 0.17.11

### Patch Changes

- 1052ebd: - Refactor drag handle widget
  - Split embed blocks to `@blocksuite/affine-block-embed`
  - Fix latex selected state in edgeless mode
  - Fix unclear naming
  - Fix prototype pollution
  - Fix portal interaction in affine modal
  - Fix paste linked block on edgeless
  - Add scroll anchoring widget
  - Add highlight selection
- Updated dependencies [1052ebd]
  - @blocksuite/affine-model@0.17.11
  - @blocksuite/affine-shared@0.17.11
  - @blocksuite/block-std@0.17.11
  - @blocksuite/global@0.17.11