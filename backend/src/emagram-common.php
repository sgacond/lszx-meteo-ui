<?php

  define("METEO_CSV_URL", "https://data.geo.admin.ch/ch.meteoschweiz.messwerte-aktuell/VQHA80.csv");
  define("METEO_CSV_LINEBREAK", "\r\n");
  define("METEO_CSV_DELIM", ";");
  define("METEO_CSV_KEY_TEMP", "tre200s0");
  define("METEO_CSV_KEY_DEWPOINT", "tde200s0");
  define("METEO_CSV_KEY_WINDDIR", "dkl010z0");
  define("METEO_CSV_KEY_WINDSPEED", "fu3010z0");
  define("METEO_CSV_KEY_WINDGUSTS", "fu3010z1");
  define("METEO_CSV_KEY_QNH", "pp0qnhs0");

  define("SNAPSHOT_DIR", "snapshots");
  define("SNAPSHOT_PREFIX", "stations-snapshot");
  define("SNAPSHOT_RETENTION", "PT24H"); // https://www.php.net/manual/de/datetime.sub.php

  function getMeta() {
    $metaFileContents = file_get_contents("meta.json");
    return json_decode($metaFileContents);
  }

?>
