class Features {
  constructor(query, query_string, one) {
    this.query = query;
    this.queryString = query_string || {};
    this.one = one;
  }

  // ` Performs the filter and return the query.
  filter() {
    // ` Query Object
    const query_object = { ...this.queryString };

    // ` Remove Sort/Fields/Page/Limit from query string
    const excluded = ['page', 'sort', 'limit', 'select', 'populate', 'search'];
    excluded.forEach((el) => delete query_object[el]);

    // ` Refactor query string i.e. gte -> $gte
    let query_string = JSON.stringify(query_object);
    query_string = query_string.replace(
      /\b(gte|gt|lte|lt|regex)\b/g,
      (match) => `$${match}`
    );

    // ` Return query [this.query ,  this.queryString]
    this.query = this.query.find(JSON.parse(query_string));

    return this;
  }

  // ` Performs the sorting and return the query.
  sort() {
    // ` if sorting provide ?
    if (this.queryString.sort) {
      // ` Refactoring sorting fields i.e. , -> ' '
      const sort_by = this.queryString.sort.split(',').join(' ');

      // ` Execute query -  sort by the fields provided
      this.query = this.query.sort(sort_by);
    } else {
      // `  default to ascending-createdAt
      this.query = this.query.sort('-createdAt');
    }

    // ` Return query [this.query ,  this.queryString]
    return this;
  }

  // ` Performs Selection on the specified field and return the query. i.e. limits the fields
  select() {
    // ` if selected fields provided ?
    if (this.queryString.select) {
      console.log('this.queryString.select', this.queryString.select);
      const select = this.queryString.select.split(',').join(' ');

      // ` Execute query - select/limit only the fields provided
      this.query = this.query.select(select);
    } else {
      // ` default to remove field "__v" , from the result
      this.query = this.query.select('-__v');
    }

    // ` Return query [this.query ,  this.queryString]
    return this;
  }

  // ` Performs Population on the specified field and return the query. i.e. limits the fields
  populate() {
    // ` if populate fields provided ?
    if (this.queryString.populate) {
      const fields_array = JSON.parse(this.queryString.populate);

      // ` Execute query - populate array of fields
      this.query = this.query.populate(fields_array);
    }

    // ` Return query [this.query ,  this.queryString]
    return this;
  }

  // ` Performs the paginate and return the query.
  paginate() {
    // ` Pagination
    const page = this.queryString.page * 1 || 1;
    // ` Limit per page
    const limit = this.queryString.limit * 1 || 100;
    // ` Skip number of documents from staring point
    const skip = (page - 1) * limit;

    // ` Execute query - skip and limit documents
    this.query = this.query.skip(skip).limit(limit);

    // ` Return query [this.query ,  this.queryString]
    return this;
  }
}
module.exports = Features;
