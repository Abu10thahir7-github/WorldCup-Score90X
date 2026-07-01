export async function getPlayerImage(playerName: string) {
  try {
    const res = await fetch(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(
        playerName,
      )}`,
      {
        cache: 'force-cache',
      },
    );

    const data = await res.json();

    if (!data.player || data.player.length === 0) {
      return null;
    }

    return (
      data.player[0].strCutout ||
      data.player[0].strThumb ||
      data.player[0].strRender ||
      null
    );
  } catch {
    return null;
  }
}