let products = [];
let cart = [];
let totalCart = 0;

let sortByValue = (a, b) => {
  let aValue = parseInt(a.preco);
  let bValue = parseInt(b.preco);
  return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
};

let sortByName = (a, b) => {
  let aValue = a.nome;
  let bValue = b.nome;
  return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
};

let setProducts = (data) => {
  $.each(data, (indice, data) => {
    products.push(data);
    $("#list-products").append(
      `
      <div class="" id=${data.tipo} data-product-id=${data.id}>
        <div class="product product-single">
          <div class="product-thumb">
            <div class="product-label">
              <span>New</span>
              <span class="sale">-20%</span>
            </div>
            <button class="main-btn quick-view" id="productDetail" ><i class="fa fa-search-plus"></i> Quick view</button>
            <img src=${data.imagem} style="max-width:250px;max-height:250px;width:auto;heigh:auto">
          </div>
          <div class="product-body">
            <h3 class="product-price">R$ ${data.preco} </h3>
            <div class="product-rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o empty"></i>
            </div>
            <h2 class="product-name">
              <a href="#">
                ${data.nome}
              </a>
            </h2>
            <div class="product-btns" id="addToCart">
              <button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      `
    );
  });
};

$(document).on("click", "#filtredVga", () => {
  $("#list-products").empty();

  products.forEach((element) => {
    if (element.tipo === "vga") {
      $("#list-products").append(
        `
      <div class="" id=${element.tipo} data-product-id=${element.id}>
        <div class="product product-single">
          <div class="product-thumb">
            <div class="product-label">
              <span>New</span>
              <span class="sale">-20%</span>
            </div>
            <button class="main-btn quick-view" id="productDetail"><i class="fa fa-search-plus"></i> Quick view</button>
            <img src=${element.imagem} style="max-width:250px;max-height:250px;width:auto;heigh:auto">
          </div>
          <div class="product-body">
            <h3 class="product-price">R$ ${element.preco} </h3>
            <div class="product-rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o empty"></i>
            </div>
            <h2 class="product-name">
              <a href="#">
                ${element.nome}
              </a>
            </h2>
            <div class="product-btns" id="addToCart">
              <button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      `
      );
    }
  });
});

$(document).on("click", "#filtredRam", () => {
  $("#list-products").empty();

  products.forEach((element) => {
    if (element.tipo === "ram") {
      $("#list-products").append(
        `
      <div class="" id=${element.tipo} data-product-id=${element.id}>
        <div class="product product-single">
          <div class="product-thumb">
            <div class="product-label">
              <span>New</span>
              <span class="sale">-20%</span>
            </div>
            <button class="main-btn quick-view" id="productDetail"><i class="fa fa-search-plus"></i> Quick view</button>
            <img src=${element.imagem} style="max-width:250px;max-height:250px;width:auto;heigh:auto">
          </div>
          <div class="product-body">
            <h3 class="product-price">R$ ${element.preco} </h3>
            <div class="product-rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o empty"></i>
            </div>
            <h2 class="product-name">
              <a href="#">
                ${element.nome}
              </a>
            </h2>
            <div class="product-btns" id="addToCart">
              <button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      `
      );
    }
  });
});

$("#sortProducts").change(function () {
  let sortBy = $(this).children("option:selected").text();

  if (sortBy === "Position") {
    $("#list-products").empty();
    products.sort(sortByName);
    products.forEach((element) => {
      $("#list-products").append(
        `
      <div class="" id=${element.tipo} data-product-id=${element.id}>
        <div class="product product-single">
          <div class="product-thumb">
            <div class="product-label">
              <span>New</span>
              <span class="sale">-20%</span>
            </div>
            <button class="main-btn quick-view" id="productDetail"><i class="fa fa-search-plus"></i> Quick view</button>
            <img src=${element.imagem} style="max-width:250px;max-height:250px;width:auto;heigh:auto">
          </div>
          <div class="product-body">
            <h3 class="product-price">R$ ${element.preco} </h3>
            <div class="product-rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o empty"></i>
            </div>
            <h2 class="product-name">
              <a href="#">
                ${element.nome}
              </a>
            </h2>
            <div class="product-btns" id="addToCart">
              <button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      `
      );
    });
  } else {
    $("#list-products").empty();
    products.sort(sortByValue).reverse();
    products.forEach((element) => {
      $("#list-products").append(
        `
      <div class="" id=${element.tipo} data-product-id=${element.id}>
        <div class="product product-single">
          <div class="product-thumb">
            <div class="product-label">
              <span>New</span>
              <span class="sale">-20%</span>
            </div>
            <button class="main-btn quick-view" id="productDetail"><i class="fa fa-search-plus"></i> Quick view</button>
            <img src=${element.imagem} style="max-width:250px;max-height:250px;width:auto;heigh:auto">
          </div>
          <div class="product-body">
            <h3 class="product-price">R$ ${element.preco} </h3>
            <div class="product-rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o empty"></i>
            </div>
            <h2 class="product-name">
              <a href="#">
                ${element.nome}
              </a>
            </h2>
            <div class="product-btns" id="addToCart">
              <button id="rola" class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      `
      );
    });
  }
});

$(document).on("click", "#addToCart", function () {
  $("#valueCart").empty();
  let id = $(this).parent().parent().parent().attr("data-product-id");
  products.forEach((element) => {
    if (element.id === id) {
      cart.push(element);
      totalCart += parseFloat(element.preco);

      $("#cartList").append(
        `
      <div class="product product-widget">
        <div class="product-thumb">
          <img src=${element.imagem} alt="">
        </div>
        <div class="product-body">
          <h3 class="product-price">R$ ${element.preco}<span class="qty"></span></h3>
          <h2 class="product-name"><a href="#">${element.nome}</a></h2>
        </div>
        <button class="cancel-btn"><i class="fa fa-trash"></i></button>
      </div>
    `
      );

      $("#numberItensCart").append(
        `
          <span class="qty">${cart.length}</span>
        `
      );
    }
  });

  $("#valueCart").append(
    `
      <span>R$ ${totalCart}</span>
    `
  );
});

$(document).on("click", "#cartCheckout", function () {
  $("#sectionBody").empty();
  $("#sectionBody").append(
    `
      <!-- section -->
      <div class="section">
        <!-- container -->
        <div class="container">
          <!-- row -->
          <div class="row">
            <form id="checkout-form" class="clearfix">
              <div class="col-md-12">
                <div class="order-summary clearfix">
                  <div class="section-title">
                    <h3 class="title">Order Review</h3>
                  </div>
                  <table class="shopping-cart-table table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th></th>
                        <th class="text-center">Price</th>
                      </tr>
                    </thead>
                    <tbody id="productInCart">
                    </tbody>
                    <tfoot id="subtotalCart">
                    </tfoot>
                  </table>
                  <div class="pull-right">
                    <button class="primary-btn">Place Order</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- /row -->
        </div>
        <!-- /container -->
      </div>
      <!-- /section -->
    `
  );
  cart.forEach((element) => {
    $("#productInCart").append(
      `
      <tr>
        <td class="thumb"><img src=${element.imagem} style="max-width:150px;max-height:150px;width:auto;heigh:auto" alt=""></td>
        <td class="details">
          <a href="#">${element.nome}</a>
        </td>
        <td class="price text-center"><strong>R$ ${element.preco}</strong></td>
      </tr>
      `
    );
  });

  let valueTotalCart = 0;
  cart.forEach((element) => {
    valueTotalCart += parseFloat(element.preco);
  });
  $("#subtotalCart").append(
    `
      <tr>
        <th class="empty" colspan="3"></th>
        <th>SUBTOTAL</th>
        <th colspan="2" class="sub-total">R$ ${valueTotalCart}</th>
      </tr>
      <tr>
        <th class="empty" colspan="3"></th>
        <th>SHIPING</th>
        <td colspan="2">Free Shipping</td>
      </tr>
      <tr>
        <th class="empty" colspan="3"></th>
        <th>TOTAL</th>
        <th colspan="2" class="total">R$ ${valueTotalCart}</th>
      </tr>
    `
  );
});

$(document).on("click", "#productDetail", function () {
  let id = $(this).parent().parent().parent().attr("data-product-id");
  $("#sectionBody").empty();
  products.forEach((element) => {
    if (element.id === id) {
      $("#sectionBody").append(
        `
          <!-- section -->
          <div class="section">
            <!-- container -->
            <div class="container">
              <!-- row -->
              <div class="row">
                <!--  Product Details -->
                <div class="product product-details clearfix">
                  <div class="col-md-6">
                    <div id="product-main-view">
                      <div class="product-view">
                        <img src=${element.imagem} alt="">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6" data-product-id=${element.id}>
                    <div class="product-body">
                      <div class="product-label">
                        <span>New</span>
                        <span class="sale">-20%</span>
                      </div>
                      <h2 class="product-name">${element.nome}</h2>
                      <h3 class="product-price">R$ ${element.preco} </h3>
                      <div>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-o empty"></i>
                        </div>
                        <a href="#">3 Review(s) / Add Review</a>
                      </div>
                      <p><strong>Availability:</strong> In Stock</p>
                      <p><strong>Brand:</strong> E-SHOP</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <div class="product-btns">
                        <div class="qty-input">
                          <span class="text-uppercase">QTY: </span>
                          <input class="input" type="number">
                        </div>
                        <button class="primary-btn add-to-cart" id="addToCart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Product Details -->
              </div>
              <!-- /row -->
            </div>
            <!-- /container -->
          </div>
          <!-- /section -->
        `
      );
    }
  });
});

$.ajax({
  url:
    "http://ramos-api.herokuapp.com/produtos?pront=3005054&key=6e48ffc8905ddfb88737e975abc0cb38",
  type: "GET",
  dataType: "JSON",
  success: setProducts,
});
