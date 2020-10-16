class ApiService {
  async search(query, options = {
    lang: 'en',
  }) {
    const res = await fetch(
      `https://${options.lang}.wikipedia.org/w/api.php?action=query&origin=*&list=search&format=json&srsearch=${query}`,
    );
    return res.json();
  }
}

const apiService = new ApiService();

export {
  apiService,
  ApiService,
};
