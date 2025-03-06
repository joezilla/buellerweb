"use client"

import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

type State = {
  toasts: ToasterToast[]
}

export function useToast() {
  const [state, setState] = React.useState<State>({
    toasts: [],
  })

  return {
    toasts: state.toasts,
    toast: (props: Omit<ToasterToast, "id">) => {
      const id = Math.random().toString(36).slice(2)
      setState((state) => ({
        toasts: [{ ...props, id }, ...state.toasts].slice(0, TOAST_LIMIT),
      }))
    },
    dismiss: (toastId?: string) => {
      setState((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== toastId),
      }))
    },
  }
} 