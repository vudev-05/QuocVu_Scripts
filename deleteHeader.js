// ========================================
// RevenueCat ETag Header Remover
// 🔐 Remove ETag cache headers for RevenueCat
// 📅 Version: 5.2.0 (2026-04-13)
// 👤 Author: Nguyễn Ngọc Anh Tú (z3rokaze)
// ========================================

var modifiedHeaders = $request.headers;
var headersToDel = ["X-RevenueCat-ETag", "x-revenuecat-etag", "If-None-Match", "if-none-match"];
for (var key in modifiedHeaders) {
    if (headersToDel.includes(key) || headersToDel.includes(key.toLowerCase())) {
        delete modifiedHeaders[key];
    }
}
$done({headers: modifiedHeaders});
