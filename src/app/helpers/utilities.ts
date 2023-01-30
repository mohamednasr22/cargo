export default class UtilityService {
  private appendFormData(formData, data, rootName) {
      let root = rootName || '';
      if (data instanceof File) {
          formData.append(root, data);
      } else if (Array.isArray(data)) {
          for (var i = 0; i < data.length; i++) {
              this.appendFormData(formData, data[i], root + '[' + i + ']');
          }
      } else if (typeof data === 'object' && data) {
          for (var key in data) {
              if (data.hasOwnProperty(key)) {
                  if (root === '') {
                      this.appendFormData(formData, data[key], key);
                  } else {
                      this.appendFormData(formData, data[key], root + '[' + key + ']');
                  }
              }
          }
      } else {
          if (data !== null && typeof data !== 'undefined') {
              formData.append(root, data);
          }
      }
  }

  getFormDataFromObj(data) {
      var formData = new FormData();

      this.appendFormData(formData, data, '');

      return formData;
  }
}
