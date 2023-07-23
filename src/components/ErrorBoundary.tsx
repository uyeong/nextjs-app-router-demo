'use client'
import React, { Component, ReactNode } from 'react';

type Props = {
  fallback: ReactNode,
  children: ReactNode
};

class ErrorBoundary extends Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
