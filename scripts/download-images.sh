#!/usr/bin/env bash
# Downloads all source media from the original Uplift 2 Thrive site and stores
# them locally under public/images with clean, semantic names. Run from /site.
set -euo pipefail

BASE="https://uplift2thriveconsulting.com/wp-content/uploads"
OUT="public/images"

dl () {
  local url="$1" dest="$2"
  if [ -f "$dest" ]; then
    echo "skip  $dest"
    return
  fi
  if curl -fsSL "$url" -o "$dest"; then
    echo "ok    $dest"
  else
    echo "FAIL  $url"
  fi
}

# People / portraits
dl "$BASE/2022/12/Chante-Ramsey-CEO-1-768x1154.webp"               "$OUT/people/chante-portrait.webp"
dl "$BASE/2022/12/Chante-Ramsey-CEO-2-681x1024.webp"               "$OUT/people/chante-about.webp"
dl "$BASE/2022/12/Chante-Ramsey-CEO-3-1024x681.webp"               "$OUT/people/chante-session-wide.webp"
dl "$BASE/2023/01/Uplift-2-Thrive-Consulting-1-scaled.webp"        "$OUT/people/u2t-session-1.webp"
dl "$BASE/2023/01/Uplift-2-Thrive-Consulting-3-scaled-e1672696691440-881x1024.webp" "$OUT/people/u2t-session-3.webp"

# Stock / atmosphere
dl "$BASE/2022/12/Stock-2-300x200.webp"                            "$OUT/stock/stock-2.webp"
dl "$BASE/2022/12/Stock-3-150x150.webp"                            "$OUT/stock/stock-3.webp"
dl "$BASE/2022/12/Stock-4-1024x683.webp"                           "$OUT/stock/stock-4.webp"
dl "$BASE/2022/12/Stock-5-1024x683.webp"                           "$OUT/stock/stock-5.webp"
dl "$BASE/2022/12/Stock-7-1024x683.webp"                           "$OUT/stock/stock-7.webp"

# Service / program imagery
dl "$BASE/2023/01/Mindset-Hour-Photo-e1673830969734.webp"         "$OUT/programs/upstart-mindset.webp"
dl "$BASE/2023/05/Scale-Up-Your-Team-VIP-Day-Plus-1024x576.webp"  "$OUT/programs/scale-up.webp"
dl "$BASE/2025/06/U2T-Header-Graphics-for-website.png"            "$OUT/graphics/aspire-header.png"
dl "$BASE/2025/08/U2T-Comm-Convo.png"                             "$OUT/graphics/community-conversations.png"
dl "$BASE/2025/08/Site__CommConv-300x251.png"                     "$OUT/graphics/community-conversations-tile.png"
dl "$BASE/2026/03/labswksps2.png"                                 "$OUT/graphics/labs-workshops.png"
dl "$BASE/2026/01/Purple-White-Modern-Creative-Business-Webinar-Instagram-Post-2.png" "$OUT/graphics/mwbe-webinar.png"
dl "$BASE/2025/06/4.png"                                          "$OUT/graphics/uplift-village.png"
dl "$BASE/2025/06/Beige-Modern-Fashion-Business-Out-Of-Office-Instagram-Post-300x300.png" "$OUT/graphics/aspire-tile.png"
dl "$BASE/2026/02/Blue-And-White-Modern-Website-Development-Instagram-Post-2-300x300.png" "$OUT/graphics/labs-tile.png"

# Testimonials (headshots)
dl "$BASE/2022/12/LeeWhetsone-scaled.webp"                        "$OUT/testimonials/lee.webp"
dl "$BASE/2022/12/LysandraPerez-scaled.webp"                      "$OUT/testimonials/lysandra.webp"
dl "$BASE/2023/01/Aisha.webp"                                     "$OUT/testimonials/aishah.webp"
dl "$BASE/2022/12/DanielleMoore-scaled.webp"                      "$OUT/testimonials/danielle.webp"
dl "$BASE/2026/02/123_1.jpeg"                                     "$OUT/testimonials/atalaya.jpeg"
dl "$BASE/2022/12/LeslieCaseyBlake-scaled.webp"                   "$OUT/testimonials/leslie.webp"

echo "Done."
