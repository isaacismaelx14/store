# touch src/pages/register/index.ts && touch src/pages/register/Register.tsx
# touch src/pages/product/index.ts && touch src/pages/product/Product.tsx
# touch src/pages/stores/index.ts && touch src/pages/stores/Stores.tsx
# touch src/pages/cart/index.ts && touch src/pages/cart/Cart.tsx
# touch src/pages/login/index.ts && touch src/pages/login/Login.tsx
# mkdir src/pages/private/
# mkdir src/pages/private/Profile
# cat <<EOF > src/pages/private/Profile/index.ts 
# export {default} from './Profile';
# EOF

# cat <<EOF > src/pages/private/Profile/Profile.tsx
# export default function Profile() {
#   return (
#     <div>
#       <h2>Profile</h2>
#     </div>
#   );
# }
# EOF


# mkdir src/pages/Products
# cat <<EOF > src/pages/Products/index.ts 
# export {default} from './Products';
# EOF

# cat <<EOF > src/pages/Products/Products.tsx
# export default function Products() {
#   return (
#     <div>
#       <h2>Products</h2>
#     </div>
#   );
# }
# EOF

# mkdir src/pages/NotFound
# cat <<EOF > src/pages/NotFound/index.ts 
# export {default} from './NotFound';
# EOF

# cat <<EOF > src/pages/NotFound/NotFound.tsx
# export default function NotFound() {
#   return (
#     <div>
#       <h2>NotFound</h2>
#     </div>
#   );
# }
# EOF

# mkdir src/components
# cat <<EOF > src/components/Navigation.tsx
# export default function Navigation() {
#   return (
#     <div>
#       <h2>Navigation</h2>
#     </div>
#   );
# }
# EOF



# mkdir src/pages/private/EditProfile
# cat <<EOF > src/pages/private/EditProfile/index.ts 
# export {default} from './EditProfile';
# EOF

# cat <<EOF > src/pages/private/EditProfile/EditProfile.tsx
# export default function EditProfile() {
#   return (
#     <div>
#       <h2>EditProfile</h2>
#     </div>
#   );
# }
# EOF

# mkdir src/pages/private/ShoppingHistory
# cat <<EOF > src/pages/private/ShoppingHistory/index.ts 
# export {default} from './ShoppingHistory';
# EOF

# cat <<EOF > src/pages/private/ShoppingHistory/ShoppingHistory.tsx
# export default function ShoppingHistory() {
#   return (
#     <div>
#       <h2>ShoppingHistory</h2>
#     </div>
#   );
# }
# EOF

mkdir src/pages/private/sellers
mkdir src/pages/private/sellers/CreateProduct
cat <<EOF > src/pages/private/sellers/CreateProduct/index.ts 
export {default} from './CreateProduct';
EOF

cat <<EOF > src/pages/private/sellers/CreateProduct/CreateProduct.tsx
  import "./styles/CreateProduct.scss"
export default function CreateProduct() {
  return (
    <section className="temp-CreateProduct">
      <h2>CreateProduct</h2>
    </section>
  );
}
EOF

mkdir src/pages/private/sellers/CreateProduct/styles
cat <<EOF > src/pages/private/sellers/CreateProduct/styles/CreateProduct.scss
.temp-CreateProduct{
  & {
    min-height: 100vh;
    padding-top: 100px;
  }
}
EOF