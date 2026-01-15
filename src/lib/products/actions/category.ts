// "use server";

// import { type EditCategoryFormState, editCategorySchema } from "../schemas";

// export async function updateCategoryFormAction(
//   _prevState: EditCategoryFormState,
//   formData: FormData
// ) {
//   const values = {
//     title: formData.get("title") as string,
//     description: formData.get("description") as string,a
//   };

//   const result = editCategorySchema.safeParse(values);

//   if (!result.success) {
//     return {
//       values,
//       success: false,
//       errors: result.error.flatten().fieldErrors,
//     };
//   }

//   // Do something with the values.
//   // Call your database or API here.

//   return {
//     values: {
//       title: "",
//       description: "",
//     },
//     errors: null,
//     success: true,
//   };
// }
