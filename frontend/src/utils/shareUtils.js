// shareUtils.js
export const handleShare = async (title, text) => {
  const shareData = {
    title: title || 'Default Title',
    text: text || 'Check this out!',
    url:  window.location.href || 'https://ramadhan-with-motionu.vercel.app/',
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return { success: true, method: 'native' };
    } else {
      // Fallback: Copy to clipboard
      await navigator.clipboard.writeText(shareData.url);
      return { success: true, method: 'clipboard' };
    }
  } catch (err) {
    // If user cancels, it's caught here as an 'AbortError'
    console.error('Error sharing:', err);
    return { success: false, error: err };
  }
};