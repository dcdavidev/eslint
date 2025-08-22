import { Linter } from 'eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

const configIgnores: Linter.Config[] = defineConfig([
  // Logs & system junk
  globalIgnores(['*.log', '**/*.log'], 'Ignores logs'),
  globalIgnores(['.cache/', '**/.cache/'], 'Ignores .cache'),
  globalIgnores(['.cursor/', '**/.cursor/'], 'Ignores .cursor'),
  globalIgnores(['.DS_Store', '**/.DS_Store'], 'Ignores .DS_Store'),
  globalIgnores(['Thumbs.db', '**/Thumbs.db'], 'Ignores Windows Thumbs.db'),

  // GitHub / meta
  globalIgnores(
    ['.github/instructions/nx.instructions.md'],
    'Ignores .github instructions'
  ),

  // Node & web
  globalIgnores(['.next/', '**/.next/'], 'Ignores .next'),
  globalIgnores(['.npm/', '**/.npm/'], 'Ignores .npm'),
  globalIgnores(['.nx/', '**/.nx/'], 'Ignores .nx'),
  globalIgnores(['.pnp/', '**/.pnp/'], 'Ignores .pnp'),
  globalIgnores(['.pnpm/', '**/.pnpm/'], 'Ignores .pnpm'),
  globalIgnores(['.sass-cache/', '**/.sass-cache/'], 'Ignores .sass-cache'),
  globalIgnores(['.turbo/', '**/.turbo/'], 'Ignores .turbo'),
  globalIgnores(['.yarn/', '**/.yarn/'], 'Ignores .yarn'),
  globalIgnores(['build/', '**/build/'], 'Ignores build'),
  globalIgnores(['coverage/', '**/coverage/'], 'Ignores coverage'),
  globalIgnores(['dist/', '**/dist/'], 'Ignores dist'),
  globalIgnores(['node_modules/', '**/node_modules/'], 'Ignores node_modules'),
  globalIgnores(['out/', '**/out/'], 'Ignores out'),
  globalIgnores(['out-tsc/', '**/out-tsc/'], 'Ignores out-tsc'),
  globalIgnores(['tmp/', '**/tmp/'], 'Ignores tmp'),

  // Lockfiles
  globalIgnores(['connect.lock', '**/connect.lock'], 'Ignores connect.lock'),
  globalIgnores(
    ['package-lock.json', '**/package-lock.json'],
    'Ignores package-lock.json'
  ),
  globalIgnores(
    ['pnpm-lock.yaml', '**/pnpm-lock.yaml'],
    'Ignores pnpm-lock.yaml'
  ),
  globalIgnores(['yarn.lock', '**/yarn.lock'], 'Ignores yarn.lock'),

  // Rust
  globalIgnores(['target/', '**/target/'], 'Ignores Rust target dir'),
  globalIgnores(['Cargo.lock', '**/Cargo.lock'], 'Ignores Cargo.lock'),

  // Python
  globalIgnores(['.venv/', '**/.venv/'], 'Ignores Python venv'),
  globalIgnores(['venv/', '**/venv/'], 'Ignores Python venv'),
  globalIgnores(['__pycache__/', '**/__pycache__/'], 'Ignores __pycache__'),
  globalIgnores(['*.pyc', '**/*.pyc'], 'Ignores compiled Python files'),

  // Go
  globalIgnores(['bin/', '**/bin/'], 'Ignores Go binaries'),
  globalIgnores(['vendor/', '**/vendor/'], 'Ignores Go vendor'),

  // Java / Gradle
  globalIgnores(['target/', '**/target/'], 'Ignores Java target dir'),
  globalIgnores(['.gradle/', '**/.gradle/'], 'Ignores Gradle cache'),
  globalIgnores(['*.class', '**/*.class'], 'Ignores Java class files'),
  globalIgnores(['*.jar', '**/*.jar'], 'Ignores Java JAR files'),
  globalIgnores(['*.war', '**/*.war'], 'Ignores Java WAR files'),

  // Docker
  globalIgnores(['.docker/', '**/.docker/'], 'Ignores Docker config'),
  globalIgnores(
    ['docker-compose.override.yml'],
    'Ignores docker-compose overrides'
  ),
  globalIgnores(['**/volumes/', 'volumes/'], 'Ignores Docker volumes'),
  globalIgnores(['**/.docker-layer-cache/'], 'Ignores Docker layer cache'),
]);

export default configIgnores;
