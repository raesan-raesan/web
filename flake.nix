{
  description = "raesan-web";
  inputs = {
    nixpkgs.url =
      "github:nixos/nixpkgs/6c90912761c43e22b6fb000025ab96dd31c971ff";
    deno_2_1_4-pkgs.url =
      "github:nixos/nixpkgs/4989a246d7a390a859852baddb1013f825435cee";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils, ... }@inputs:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
      in {
        formatter =
          pkgs.nixfmt-classic;
        devShell = pkgs.mkShell {
          packages = [
            inputs.deno_2_1_4-pkgs.legacyPackages.${system}.deno
          ];
        };
      });
}
