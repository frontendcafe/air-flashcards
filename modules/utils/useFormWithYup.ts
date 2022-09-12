import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

function useFormWithYup<T>(schema: Parameters<typeof yupResolver>[0]) {
  return useForm<T>({
    resolver: yupResolver(schema),
  });
}

export default useFormWithYup;
