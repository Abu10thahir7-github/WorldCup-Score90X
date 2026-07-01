'use client';

interface ConnectorProps {
  side: 'left' | 'right';
  height?: number;
}

export default function Connector({
  side,
  height = 120,
}: ConnectorProps) {
  if (side === 'left') {
    return (
      <svg
        className="absolute -right-12 top-1/2 -translate-y-1/2"
        width="50"
        height={height}
        viewBox={`0 0 50 ${height}`}
      >
        <path
          d={`
            M0 ${height / 2}
            H25
            V${height}
            H50
          `}
          fill="none"
          stroke="#5A6475"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg
      className="absolute -left-12 top-1/2 -translate-y-1/2"
      width="50"
      height={height}
      viewBox={`0 0 50 ${height}`}
    >
      <path
        d={`
          M50 ${height / 2}
          H25
          V${height}
          H0
        `}
        fill="none"
        stroke="#5A6475"
        strokeWidth="2"
      />
    </svg>
  );
}