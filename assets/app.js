window.generateDemo = function () {
  const form = document.getElementById('lead-form');
  const data = new FormData(form);
  const business = (data.get('business') || 'бизнес').toString();
  const city = (data.get('city') || 'город').toString();
  const email = (data.get('email') || '').toString();

  const params = new URLSearchParams({ business, city, email });
  const url = `https://example.com/demo?${params.toString()}`;
  window.open(url, '_blank', 'noopener');
  return false;
};

document.getElementById('lead-form').addEventListener('submit', function (e) {
  e.preventDefault();
  window.generateDemo();
});


