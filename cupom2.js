<script>
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    const list = document.getElementById("lar").classList;
    list.add("mobile");
  }
  else {
    const list = document.getElementById("lar").classList;
    list.add("larguras");
  }
</script>