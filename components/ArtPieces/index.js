import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            slug={piece.slug}
            mame={piece.name}
            artist={piece.artist}
            imageSource={piece.imageSource}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
            isFavorite={piece.isFavorite}
          />
        );
      })}
    </ul>
  );
}
